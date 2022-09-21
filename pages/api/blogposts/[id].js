import dbConnect from "../../../utils/dbConnect";
import BlogPost from '../../../models/blogposts'


dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    console.log(id)
    console.log(typeof(id))

    switch(method){
        case 'GET':
                BlogPost.findById(id).exec()
                .then(result=>{
                    res.status(200).json({success: true, data: result});
                })
                .catch(err=>{
                    console.log(err)
                    res.status(400).json({success: false});
                })
            break;

        case 'PUT':
            BlogPost.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                }).exec()
                .then(result=>{
                    res.status(200).json({success: true, data: result});
                })
                .catch(err=>{
                    return res.status(400).json({success: false});
                });
            break;
        case 'DELETE':
            BlogPost.deleteOne({_id: id}).exec()
            .then(()=>{
                res.status(200).json({success: true, data: {}});
            })
            .catch(err=>{
                return res.status(400).json({success: false});
            });
            break;

        default:
            res.status(400).json({success: false});
            break;
            
    }
} 