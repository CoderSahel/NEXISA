document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Capture the form data
    const formData = new FormData(e.target); 
    const data = Object.fromEntries(formData.entries()); 

    console.log('Sending data:', data); // Log the data before sending it to the server

    try {
        const response = await fetch('http://localhost:3000/api/register/create-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert the form data to JSON before sending
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Server response:', result);  // Log the server response
        alert('Your submission was successful!');
        e.target.reset
    } catch (err) {
        console.error('Error:', err); // Log any errors that occur during the fetch
    }
});
