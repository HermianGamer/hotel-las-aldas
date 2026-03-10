import { ExternalUrlPreview } from "@/components/ExternalUrlPreview";

export default{
    name: 'user',
    title: 'Users',
    type: 'document',
    fields: [
        {name: 'userId', title:'User ID', type: 'string', readOnly: false},
        {name: 'name', title:'Name', type: 'string', readOnly: false},
        {name: 'cellphone', title:'Phone Number', type: 'number', readOnly: false},
        {name: 'email', title:'Email', type: 'string', readOnly: false},
        {name: 'image', title:'Image Url', type: 'url', readOnly: false},
        {name: 'createdAt', title:'Created At', type: 'datetime', readOnly: false},
    ],

    preview: {
        select:{
            title: 'name',
            image: 'image',
        },

        prepare({title, image}:any){
            return{
                title: title,
                media: image ? ExternalUrlPreview({value:image}) : '',
            }
        }
    },
};