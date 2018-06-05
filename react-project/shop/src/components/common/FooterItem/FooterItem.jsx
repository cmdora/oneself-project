import React,{Component} from 'react'
class FooterItem extends Component{
    render(){
        let {text,icon}=this.props;
        return(
            <p><span className={icon}></span><span>{text}</span></p>
        )
    }
}
export default FooterItem