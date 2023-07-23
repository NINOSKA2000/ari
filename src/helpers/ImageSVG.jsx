import Image from 'next/image'

// icons react icons
import { FiMenu,FiChevronsRight,FiChevronsLeft } from 'react-icons/fi'
import { IoClose, IoNotificationsOutline } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineDashboard, MdModeEditOutline } from 'react-icons/md'
import { GiProcessor } from 'react-icons/gi'
import { AiOutlineInbox, AiOutlineSchedule } from 'react-icons/ai'
import { FaExchangeAlt, FaSignOutAlt, FaEye, FaEyeSlash,FaSearch } from 'react-icons/fa'
import { BiSupport,BiSolidError } from 'react-icons/bi'
import { CgTimer } from 'react-icons/cg';
import { IoMdArrowRoundBack, IoMdCloseCircle } from 'react-icons/io';
import { FcMultipleInputs, FcDebt, FcLock,FcAcceptDatabase} from 'react-icons/fc';
import { BsCheckCircle } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi'



// icons of bpass

import Iconspain from '../../public/icons/spain.svg'
import Iconeeuu from '../../public/icons/eeuu.svg'
// import Iconrobot from '../../public/img/robot.PNG'


const ImageSvg = ({ name }) => {
  const icons = {
    // crud
    Edit: <MdModeEditOutline />,
    Menu: <FiMenu />,
    Close: <IoClose />,
    Notifications: <IoNotificationsOutline />,
    Check: <BsCheckCircle />,
    Change: <FaExchangeAlt />,
    SignOut: <FaSignOutAlt />,
    ShowPassword: <FaEye />,
    ClosePassword: <FaEyeSlash />,
    Search: <FaSearch />,
    Time: <CgTimer/>,
    Back:    <IoMdArrowRoundBack/>,
    Delete: <FiTrash2/>,

    // menú icons
    Products: <AiOutlineInbox />,
    Users: <HiOutlineUsers />,
    Dashboard: <MdOutlineDashboard />,
    APIS: <GiProcessor />,
    Schedule: <AiOutlineSchedule />,
    Support: <BiSupport />,
    OpenMenu: <FiChevronsRight />,
    CloseMenu: <FiChevronsLeft />,
    ErrorMessage: <IoMdCloseCircle size={48} color="red" />,

    //icons crurrency
    Benefit1: <FcMultipleInputs />,
    Benefit2: <FcDebt />,
    Benefit3: <FcAcceptDatabase />,
    Benefit4: <FcLock />,
    // imgs svg
    Spain: <Image src={Iconspain} width={100} alt='Spain' />,
    EEUU: <Image src={Iconeeuu} width={100} alt='Spain' />,
    // Robot: <Image src={Iconrobot} width={100} alt='Robot' />
  }

  return icons[name] ? icons[name] : 'x'
}

export default ImageSvg
