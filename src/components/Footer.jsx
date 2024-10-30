

const Footer = () => {
  return (
    <footer className="bg-slate-600 ">
      <div className="container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-300">
          <span>
            <p>@Kidasa Online Art Gallery</p>
            <p>Modern pieces from archient ages</p>
          </span>
        </div>
        <div className="bg-indigo-300">
          <h2 className="text-xl md:text-2xl font-bold ">Check us out on</h2>
          <a href="##" target="-blank">FaceBook</a>
         <br></br>
          <a href="##" target="-blank">Twitter</a>
          <br></br>
          <a href="##" target="-blank">Linkedln</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
