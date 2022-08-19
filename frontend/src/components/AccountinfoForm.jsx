import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createAccountinfo} from '../features/accountinfo/accountinfoSlice'

const AccountinfoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createAccountinfo({ text }));
        setText('')
    } 
  return (
    <section className="form">
          <form onSubmit={onSubmit}>
              <div className='form-group'>
                  <label htmlFor='text'> Account Information</label>
                  <input type='text' name='test' id='text' value={text} onChange={(e) => setText(e.target.value)} />
              </div>
              <div className='form-group'>
                  <button className='btn btn-block' type='submit'> Add Account Information</button>
              </div>
      </form>
    </section>
  )
}

export default AccountinfoForm
