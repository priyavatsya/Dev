
let input = process.argv.slice(2);


console.log(cmd);
switch(cmd)
{
    case "view":
        console.log("View got implemented");
        break;
        case "treefy":
            console.log("Treefy got implemented");
            break;
            case "untreefy":
                console.log("Untreefy  command Implemented");
                    break;
            case "help":
                console.log("Help Command Implemented");
                    break;
            default:
                    console.log("Work Command");
                    break;

}