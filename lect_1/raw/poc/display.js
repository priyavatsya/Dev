let root = {
    data:"d10",
    children:[{
        data:"d20",
        children:[{
            data :"d50",
            children : []
        },{
            data :"d60",
            children :[]
        }]
    },{
        data : "d30",
        children : []
    },{ 
        data:"d40",
        children:[{
            data:"d80",
            children:[]
        }]   

    }]

    }

function display(node)
{
    let menMyFamily = node.data + "=>";
    for(let i=0;i<node.children.length;i++)
    {
        let child = node.children[i];
        menMyFamily += child.data + ",";
    }

    console.log(menMyFamily);

    for(let i=0;i<node.children.length;i++)
    {
        let child = node.children[i];
        display(child);
    }

}

display(root);