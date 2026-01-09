    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })};

            const [formData, setFormData] = useState({
                company: '',
                position: '',
                location: '',
                dateApplied: '',
                status: 'Applied',
                notes: ''
            });