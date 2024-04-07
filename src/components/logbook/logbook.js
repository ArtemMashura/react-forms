import './logbook.css';

function App() {
  return (
    <div className='main'>
        <div>
            <div>
                <div className='title'>Logbook</div>
                <div className='subtitle'>для преподавателей</div>
                <div className='langGrid'>
                    <div className='langCircleSelected'>
                        RU
                    </div>
                    <div className='langCircle'>
                        EN
                    </div>
                    <div className='langCircle'>
                        BG
                    </div>
                    <div className='langCircle'>
                        PT
                    </div>
                    <div className='langCircle'>
                        UA
                    </div>
                    <div className='langCircle'>
                        RO
                    </div>
                    <div className='langCircle'>
                        GE
                    </div>
                    <div className='langCircle'>
                        AZ
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                    <div className='langCircle'>
                        RU
                    </div>
                </div>
            </div>
            
        </div>
        <div className='loginForm'>
            <input placeholder='Логин' className='inputField' type='text'></input>
            <input placeholder='Password' className='inputField' type='text'></input>
            <button className='loginButton'>ВОЙТИ</button>
            <div className='passwordReset'>
                Восстановление пароля (почему в логбуке синий текст на голубом фоне?)
            </div>
        </div>
        
    </div>
    
  );
}

export default App;
