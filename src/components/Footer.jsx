

const Footer = () => {
  return (
    <footer className="bg-slate-600 ">
      <div className="container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-300 px-16 ">
          <span>
            <p>@Kidasa Online Art Gallery</p>
            <p>Modern pieces from archient ages</p>
          </span>
        </div>
        <div className="bg-indigo-300 justify-center content-center px-16">
          <h2 className="text-xl md:text-2xl font-bold ">Check us out on</h2>
          <a href="" target="-blank">
            <img src="icons/2021_Facebook_icon.svg.png" alt="facebook" className="w-16 h-16"/>
          </a>
         <br></br>
          <a href="" target="-blank">
            <img src="icons/images.jpeg" alt="twitter" className="w-20 h-16" />
          </a>
          <br></br>
          <a href="##" target="-blank">
            <img src="icons/linkedlin.png" alt="linkedlin" className="w-16 h-16" />
          </a>
          <br></br>
          <a href="https://wa.me/25602773518" target="-blank">
              <img src="icons/WhatsApp_icon.png" alt="whatsapp"  className="w-16 h-16"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
