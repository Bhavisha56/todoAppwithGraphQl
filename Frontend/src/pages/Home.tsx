
const Home = () => {
  return (
    <div className='main'>
        <div className="text-center">
        <input className="bg-white m-10 w-62 p-5 text-black" type="text"  />
        <button className="bg-purple-900 text-white p-5 rounded-2xl active:scale-90 ">Add Note</button>
        </div>
        <div className="text-white text-center text-3xl tracking-tighter">
            <div className="flex justify-center items-center gap-10 grid grid-cols-3">
            <li>App</li><button className="bg-purple-700 p-2  rounded-2xl">Delete</button><button className="bg-purple-700 p-2 rounded-2xl">Edit</button>
            <li>ppp</li><button className="bg-purple-700 p-2 rounded-2xl">Delete</button><button className="bg-purple-700 p-2 rounded-2xl">Edit</button>
            <li>book</li><button className="bg-purple-700 p-2 rounded-2xl">Delete</button><button className="bg-purple-700 p-2 rounded-2xl">Edit</button>
            <li>bofok</li><button className="bg-purple-700 p-2 rounded-2xl">Delete</button><button className="bg-purple-700 p-2 rounded-2xl">Edit</button>
            </div>

        </div>
    </div>

  )
}

export default Home