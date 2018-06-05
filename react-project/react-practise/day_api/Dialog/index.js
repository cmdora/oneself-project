import React, {Component} from 'react'

import Dialog from './Dialog'
class DialogPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShowDialog: false
        }
    }
    
    render () {
        return (
            <div>
                <h2>弹框案例</h2>
                <div>
                    <button onClick={
                        () => {
                            this.setState({
                                isShowDialog: true
                            })
                        }
                    }>点击弹框</button>
                    <Dialog 
                        title={<div>asasd</div>}
                        isShowDialog={this.state.isShowDialog}
                        closeCallback={() => {
                            this.setState({
                                isShowDialog: false
                            })
                        }}
                        phone="13683599380"
                    >
                        <div>
                        复杂的内容
                        <div>哈哈哈哈哈哈哈哈</div>
                        <div>呵呵呵呵呵呵呵和</div>
                        </div>
                    </Dialog>
                    {/* <Dialog 
                        isShowDialog={this.state.isShowDialog}
                        closeCallback={() => {
                            this.setState({
                                isShowDialog: false
                            })
                        }}
                        title={<div>adsasdasd</div>}
                        type="1"
                    >
                        复杂的内容
                    </Dialog> */}
                </div>
            </div>
        )
    }
}

export default DialogPage
