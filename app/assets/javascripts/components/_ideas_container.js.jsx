class IdeasContainer extends React.Component {
	constructor(props) {
			super(props);

			this.state = {
				ideas: [],
				editingIdeaId: null,
				notification: ''
			};
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addNewIdea = this.addNewIdea.bind(this)
		this.updateIdea = this.updateIdea.bind(this)
		this.resetNotification = this.resetNotification.bind(this)
	  this.enableEditing = this.enableEditing.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.deleteIdea = this.deleteIdea.bind(this)
		}
	
	handleDelete(id){
    fetch(`/api/v1/ideas/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteIdea(id)
      })
  }

  deleteIdea(id){
    newIdeas= this.state.ideas.filter((idea) => idea.id !== id)
    this.setState({
      ideas: newIdeas
    })
  }
	
	
	
	
 handleFormSubmit(){
    let body = JSON.stringify({idea: {title:"", body:""} })
  fetch('api/v1/ideas.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((idea)=>{
      this.addNewIdea(idea)
    })
    
  }
  addNewIdea(idea){
    this.setState({
			ideas: [idea].concat(this.state.ideas),
			editingIdeaId: idea.id
    })
  }
	
	updateIdea(idea){
		let newIdeas = this.state.ideas
		const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
		newIdeas[ideaIndex] = idea
		this.setState(
			{
				ideas: newIdeas,
			  notification: 'All changes saved'
			}
		)
	}
	
resetNotification() {
  this.setState({notification: ''})
}


	
componentDidMount(){
    fetch('/api/v1/ideas.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ ideas: data }) });
  }
	
enableEditing(id) {
  this.setState({editingIdeaId: id}, function(){ this.title.focus() })

}	
	
render() {
  return (

		
    <div>
			<div>
				<button onClick={this.handleFormSubmit} className="newIdeaButton">
					New Idea
				</button>
				<span className="notification">
  				{this.state.notification}
				</span>
			</div>

      {this.state.ideas.map((idea) => {
        if(this.state.editingIdeaId === idea.id) {
					return(<IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea} titleRef= {input => this.title = input} resetNotification={this.resetNotification} />)
			} else {
					return (<Idea idea={idea} key={idea.id} onDelete={this.handleDelete} onClick={this.enableEditing} />)
			}
				
      })}
    </div>
  );
}
}