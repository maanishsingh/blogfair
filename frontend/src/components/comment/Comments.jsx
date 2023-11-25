import { Avatar, List } from "antd";
import { useState } from "react";

const Comments = ({ comments }) => {
    //const [comments, setComments] = useState([])
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');

    const loadComments = () => {

    }
    return (
        <div>
            <h3>Comments ({comments?.length})</h3>
            <List
                pagination={{
                    position,
                    align,
                }}
                dataSource={comments}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                            }
                            title={<a href="https://ant.design">{item?.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default Comments