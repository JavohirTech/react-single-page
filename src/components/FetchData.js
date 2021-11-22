import React from 'react'


class FetchData extends React.Component{
    state={
        user: []
    }


    componentDidMount(){
        let url = "http://18.223.202.42:3001/api/users";
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            this.setState({user: data})
        })
    }

    render(){
        return(
            <>
        <h1 className="text-center py-5">Fetched Data from API</h1>

               <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name:</th>
      <th scope="col">Age:</th>
      <th scope="col">Email:</th>
      <th scope="col">Login:</th>
      <th scope="col">Password:</th>
      <th scope="col">Address:</th>
    </tr>
  </thead>
  <tbody>
    {this.state.user.map((users)=>(
     <tr key={users.id}>
      <th scope="row"></th>
      <td>{users.name}</td>
      <td>{users.age}</td>
      <td>{users.email}</td>
      <td>{users.login}</td>
      <td>{users.password}</td>
      <td>{users.address}</td>
    </tr>
    ))}
</tbody>
</table>
            </>
        )
    }
}

export default FetchData