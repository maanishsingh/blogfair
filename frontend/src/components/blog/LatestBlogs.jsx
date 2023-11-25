import { Avatar, List } from 'antd';
import { loadAllPosts } from '../../services/post-service';
import { useEffect, useState } from 'react';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const loadLatestBlogs = () => {
        loadAllPosts(0).then(data => {
            console.log(data)
            setBlogs(data.content);
        })
    }

    useEffect(() => {
        loadLatestBlogs();
    }, [])
    return (
        <div className="w-2/3">
            <h4>The Latest</h4>
            <div className="latest-blog">
                <h6>Read Our Latest Blogs</h6>
            </div>
            <List
                itemLayout="horizontal"
                dataSource={blogs}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">{item?.user?.name}</a>}
                            description={item?.postTitle}
                        />
                    </List.Item>
                )}
            />

        </div>
    )
}
export default LatestBlogs