import React from 'react';
import "isomorphic-fetch";

class FilterComponent extends React.Component{
	constructor(){
		super();
			this.state={lists: [],loading: true},
			this.sorts = this.sorts.bind(this);
	}
	/*************** Show loading message ********** */
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); 
	  }
	  
	componentWillMount(){
		fetch('pizza.json').then(response => response.json()).then(({pizzas:lists}) => this.setState({lists}))
	}

	/*********Filter the list of pizzas */
	filter(p){
		this.setState({filter:p.target.value})
	}
	/**************** Sorting list of pizzas ***** */
	sorts(ps) {
        this.state.lists.sortPizzas = sortPizzas;
        this.setState({sorts: this.state.lists.sortPizzas()});
    }

	/************ View the data on the browser**********/
   render(){

    const { loading } = this.state;
    
    if (this.state.loading) {

        return <div>loading ...</div>;
      }
	   let lists = this.state.lists

	   if(this.state.filter){ lists=lists.filter(list => list.toLowerCase().includes(this.state.filter.toLowerCase()))
	   }
     return(
		
	   <div className="container panel panel-default">
			
			<div className="panel-body" styles={{float:'left', width: '50%'}}>
			<h3>Select Pizza Type</h3>
			<div className="row">
						<div className="col-sm-5">
						<input type="text"	className="form-control"onChange={this.filter.bind(this)} />
				</div>
			   <div className="col-sm-6">
						<button	type="button" className="btn btn-success"  onClick={this.sorts.bind(this)}>	sort </button>
				</div>
			</div>
			<div className="panel-body" styles={{float:'right', width: '50%'}}>
                <h3>Available pizzas</h3>
				 <ul className="list-group">
				   {lists.map(list => <User key={list} user={list} /> )}
				</ul>
			</div>
			</div>
			
	   </div>
	 )
   }
}

/********** Sort logic *****/
function sortPizzas() {
    const val=this;
    this.asc = !this.asc;
    return this.sort(function (l, x) {
        return l > x ? (val.asc ? 1 : -1) : l < x ? (val.asc ? -1 : 1) : 0;
	});
}

const User =(props) =>

<li className="list-group-item">{props.user}</li>
 

export default FilterComponent;





