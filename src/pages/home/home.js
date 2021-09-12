import React from 'react'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'这是首页啊'
        }
    };
    render() {
        return(
            <div>{this.state.msg}</div>
        )
    }
}
export default Home