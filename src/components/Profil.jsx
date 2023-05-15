import React from 'react';
import logo from "../assets/logoeworld.png";
import person from "../assets/logosneakbyyan.png";


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Marion',
            bio: 'Dupont',
            email: 'marion.dupont@example.com',
        };
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img src={logo} alt='logo e-world' style={{width: 100, marginBottom: "5%"}}/>
                <img src={person} style={{width: '10%', borderRadius: 100, marginBottom: "10px", marginRight: "10px"}}
                     alt="imgPersonne"/>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{marginLeft: "50px", marginTop: "50px"}}>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Prénom : {this.state.name}</p>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Nom : {this.state.bio}</p>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Email : {this.state.email}</p>
                    </div>
                    <div style={{marginLeft: "50px", marginTop: "50px"}}>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Prénom : {this.state.name}</p>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Nom : {this.state.bio}</p>
                        <p style={{padding: "15px", backgroundColor: "white", borderRadius: "20px"}}>Email : {this.state.email}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
