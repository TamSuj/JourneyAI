import Form from 'react-bootstrap/Form';
function LocationInput({ setLocation }) {
    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
            <h3>Where do you want to go?</h3>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter a City name"
            />
        </div>
        // <Form>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Where do you want to go</Form.Label>
        //         <Form.Control type="text" placeholder="Enter a City name" onChange={handleChange}/>
        //         {/* <Form.Text className="text-muted">
        //     Where do you want to go?
        // </Form.Text> */}
        //     </Form.Group>
        // </Form>
    );
}

export default LocationInput;
