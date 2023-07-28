import './widget.css'
import { ChatBubble, ApprovalOutlined, RemoveCircleOutline } from '@mui/icons-material'

const Widget = ({type}) => {


  let details;
  
  switch(type){
    case 'total':
      details = {
        totalProduct: 'Product',
        num: 500,
        icon: <ChatBubble style={{color: '#001D3D'}}/>,
        remain: 12
      };
      break;
    case  'accepted':
      details = {
        totalProduct: 'Accepted',
        num: 250,
        icon: <ApprovalOutlined style={{color: 'green'}}/>,
        remain: 30
      };
      break;
    case  'rejected':
      details = {
        totalProduct: 'Rejected',
        num: 250,
        icon: <RemoveCircleOutline style={{color: 'crimson'}}/>,
        remain: 8
      };
      break;
      default:
        return null;
  }


  return (
    <section className='widget'>
      <div className='left'>
        <h4>Total {details.totalProduct}</h4>
        <p>{details.num}</p>
        <span>{details.remain} from yesterday</span>
      </div>
      <div className='right'>
       {details.icon}
      </div>
    </section>
  )
}

export default Widget
