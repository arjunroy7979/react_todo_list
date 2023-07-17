import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  function onSubmiting() {
    // setList([...list,name])
    // console.log(list)
    setList((list) => {
      const updatelist = [...list, name]
      console.log(updatelist)
      setName('')
      return updatelist
    })
  }

  function RemoveFile(i) {
    const deleteddata = list.filter((ele, id) => {
      return i !== id;
    })
    setList(deleteddata)
  }

  return (
    <div className='fluid-container'>
      <div className='navbar navbar-expand-lg bg-dark text-light'>
        <h2>Todo List</h2>
      </div>
      <div className='container d-flex input-group flex-nowrap my-3'>
        <input type='text' className='w-100 form-control' placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onSubmiting} className='btn btn-primary'>Adding</button>
      </div>
      {
        list !== [] && list.map((e, i) => {
          return (
            <div key={i} className='container my-10px d-flex input-group my-3'>
              <div className='form-control mb-10px'>{e}</div>
              <button onClick={() => RemoveFile(i)} className='btn btn-danger'>Delete</button>
            </div>
          )
        })
      }
      <div className='container text-center my-3'>
        {list.length >= 2 && <button className='btn btn-danger' onClick={() => setList([])}>RemoveAll</button>}
      </div>
    </div>
  )
}

export default App
