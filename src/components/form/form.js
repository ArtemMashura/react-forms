import './form.css';
import {useState} from 'react';

function App() {
    const [formData, setFormData] = useState({name: "",email: "",rememberMe: true});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(checked)
    setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`
    );
};

  return (
    <div className='autoRia'>
        <form onSubmit={handleSubmit} className='form'>
            <div className='text'>Вхід на сайт AUTO.RIA</div>
            <div className='buttons'>
                <div className='autoLoginBtn'>
                    <button type="button" class="btn btn-outline-primary" >
                        <img className='btnImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt=''></img>
                        Увійти через Google
                    </button>
                </div>
                <div className='autoLoginBtn'>
                    <button type="button" class="btn btn-outline-primary">
                        <img className='btnImage' src="https://upload.wikimedia.org/wikipedia/commons/8/89/DiiaLogo.svg" alt=''></img>
                        Увійти через Дію
                    </button>
                </div>
                <div className='autoLoginBtn'>
                    <button type="button" class="btn btn-outline-primary">
                        <img className='btnImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt=''></img>
                        Увійти через Telegram
                    </button>
                </div>
                
            </div>
            
            <div className='text'>
                Або
            </div>
            <div>
                <input className='textInput' placeholder='Телефон або e-mail' type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <input className='textInput' placeholder='Пароль' type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            
            <div className='passwordInfo'>
                <div className='rememberMeSegment'>
                    <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleCheckboxChange} />
                    <label className='rememberMeLabel' >Запам'ятати мене</label>
                </div>
                
                <label className='forgotPasswordLabel'>Забули пароль?</label>
            </div>

            <button type="button" class="btn btn-success">Увійти</button>
        </form>
    </div>
    
  );
}

export default App;
