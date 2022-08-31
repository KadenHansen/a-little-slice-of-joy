import React, { useState, useEffect } from "react" 

export default function NewAdminUserForm() {


	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
		firstName: '',
		lastName: ''
	})

    // set new values for service object on form change
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

	async function handleSubmit(e: any) {
		e.preventDefault()

		await fetch(`http://localhost:8000/users/admin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                username: user.username,
                password: user.password,
				email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            })
		})

	}

	return (
		<main>
			<h1>Create New Admin</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={handleChange}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={handleChange}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">Username</label>
						<input
							type="string"
							required
							value={user.username}
							onChange={handleChange}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
				</div>
				<div className="col-sm-6 form-group">
					<label htmlFor="password">Password</label>
					<input 
						type="password"
						required
						value={user.password}
						onChange={handleChange}
						className="form-control"
						id="password"
						name="password"
					/>
				</div>
				<div className="col-sm-6 form-group">
					<label htmlFor="email">Email</label>
					<input 
						type="email"
						required
						value={user.email}
						onChange={handleChange}
						className="form-control"
						id="email"
						name="email"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}