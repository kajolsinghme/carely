const Navbar = () => {
  return (
    <>
      <div className="border-e-neutral-900 border-2 h-14 flex justify-between">
        <div className="flex gap-1 items-center ml-20">
          <img src="../src/assets/Carely Logo.png" alt="Logo" className="w-12 h-9" />
          <p className="text-2xl font-bold">Carely</p>
        </div>
        <div className="flex gap-6 items-center ml-20 list-none">
          <li><a href="">Find Doctors</a></li>
          <li><a href="">Consult Online</a></li>
          <li><a href="">For Doctors</a></li>
        </div>
        <div>Right</div>
      </div>
    </>
  )
}

export default Navbar