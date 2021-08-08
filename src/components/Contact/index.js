import { validateEmail } from "../../../../photo-port/src/utils/helpers";

const Contact = ( props ) => {

    const {
        setCurrentCategory
    } = props;

    const [ formState, setFormState ] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );

    const [ errorMessage, setErrorMessage ] = useState('');

    const { name, email, message } = formState;

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            setErrorMessage(!isValid ? 'Your email is invalid' : '')
        } else {
            setErrorMessage(!event.target.value.length ? `${event.target.name} is required.` : ``);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [ event.target.name ] : event.target.value })
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <section className='contact'>
            <div className='contactForm'>
                <h2 className='col-12'>About Me</h2>
                <form></form>
            </div>
        </section>
    );
}