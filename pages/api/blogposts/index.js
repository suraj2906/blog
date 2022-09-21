import dbConnect from "../../../utils/dbConnect";
import BlogPost from '../../../models/blogposts'


dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET': 
            try{
                const blogs = await BlogPost.find({});
                res.status(200).json({success: true, data: blogs})
            } catch (error){
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const blog = await BlogPost.create(req.body);

                res.status(201).json({success: true, data: {
                    title: '${blog.title}',
                    description: '${blog.description}',
                    content: '${blog.content}',
                    picture: '${blog.picture}',
                }})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}