import './create.css'
import { wallpaper, avater } from '../../constants/images'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CreateAccount = () => {
  return (
    <main className='create'>
      <section className='left'>
        <img src={wallpaper} alt=''/>
      </section>
      <section className='right'>
        <h2>Welcome!</h2>
        <p>Let's know you more</p>

        <div className='input__section'>
            <label htmlFor='avater'>
                <img src={avater} alt=''/>
            </label>
            <input type='file' id='avater' className='profileImg' />
        </div>

        <div className='input__section'>
            <label htmlFor='name'>FullName</label>
            <input type='text' name='name' className='inputs' placeholder='Enter name'/>
        </div>

        <div className='input__section'>
            <label htmlFor='phone'>Phone</label>
            <PhoneInput
                    country={'USD'}
                    placeholder='Enter your phone number...'
                    width={400}
                    
                // inputProps={{
                //     name: 'phone',
                //     placeholder: 'Enter your phone number...',
                //     required: true,
                // }}
            />
            
        </div>

         <section className='input__section-others'>

            <div className='input__section'>
                <label htmlFor='country'>Country</label>
                <input type='text' name='country' className='input__section-extra' placeholder='Enter country'/>
                </div>

            <div className='input__section'>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' className='input__section-extra' placeholder='Enter city'/>
            </div>

        </section>
        <div className='btns'>
            <p>Skip</p>
            <button>Done</button>
        </div>


      </section>
    </main>
  )
}

export default CreateAccount
