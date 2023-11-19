import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from 'reactstrap' 
import { getAllCategories } from '../services/category-service'
import { doAddPost } from '../services/post-service'

const AddPost=()=>{
    const [categories,setCategories]=useState([])

  useEffect(()=>{
     getAllCategories().then((data)=>{
      setCategories(data)
     })
  },[])

  const [post, setPost]= useState({
    'postTitle':'',
    'postContent':'',
    'categoryId':-1
  })

  // for editor
    const editor = useRef(null)

    const updateField=(event)=>{
        setPost({
          ...post,
          [event.target.name]:event.target.value
        })
    }

    const updateContent=(content)=>{
      setPost({
        ...post,
        'postContent':content
      })
    }
    const createPost=(event)=>{
        event.preventDefault()
        if(post.postTitle.trim()===''){
          toast.error("Please enter post title")
          return
        }
        if(post.postContent.trim()===''){
          toast.error("You can not add blank post")
          return
        }
        if(post.categoryId=== ''){
          toast.error("Please select any category")
          return
        }

        doAddPost(post).then(response=>{
          //console.log(response)
          toast.success("Congrats !! Post has been created successfully.")
        }).catch(error=>{
          toast.error("Sorry !! Something went wrong.")
        })
    }

    return(
        <Container>
        <Card className='shadow-sm mt-2'>
          <CardBody>
            <Form onSubmit={event=>createPost(event)}>
              <FormGroup>
                <Label for="postTitle">
                  Enter Post Title
                </Label>
                <Input id="postTitle" type='text' value={post.postTitle}
                name="postTitle"
                onChange={event=>updateField(event)} />
              </FormGroup>
              <FormGroup>
                <Label for="category">Select Category</Label>
                <Input id="category" 
                type='select' 
                defaultValue={0}
                 onChange={event=>updateField(event)}
                 name="categoryId"
                 value={post.categoryId}
                 >
                  <option value={0}>---Select Category---</option>
                  {
                    categories.map(category=>(
                       <option value={category.categoryId} key={category.categoryId} >{category.categoryTitle}</option>
                    ))
                  }
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='content'>Write your post</Label>
                {/* <Input type='textarea' id="content" style={{height:"225px"}}></Input> */}
                <JoditEditor
                ref={editor}
                onChange={newContent=>updateContent(newContent)}
                >

                </JoditEditor>
              </FormGroup>
              <Container className='text-center'>
                <Button type='submit' color='primary'>Submit</Button>
                <Button type="reset" className='ms-2' color='secondary'>Reset</Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
}

export default AddPost