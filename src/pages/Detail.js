import React, {Component} from 'react';


class Detail extends Component {
    constructor(){
        super();

        this.state = {
            loading: true
        }
    }

    loadData(id){
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading : false});
        }, 3000);
    };

    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.loadData(this.props.match.params.id)
        }
    }

    componentDidMount(){
      this.loadData(this.props.match.params.id)
    }

    render() {
        const view = this.state.loading ? <span>Loading</span> : <span>Content loaded</span>;

        return (
            <div className="Detail">
                {this.props.match.params.id}
                {view}
            </div>
        );
    }
}

export default Detail;
