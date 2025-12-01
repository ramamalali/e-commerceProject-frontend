import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const data=[
    {icon:<ElectricBoltIcon sx={{fontSize:"40px"}}/> , title:"Fast Delivery" , desc:"Start from 10$"},
    {icon:<WorkspacePremiumIcon sx={{fontSize:"40px"}}/> , title:"Money Guarantee" , desc:"7 Days Back"},
    {icon:<AccessAlarmIcon sx={{fontSize:"40px"}}/> , title:"365 Days" , desc:"for free return"},
    {icon:<CreditScoreIcon sx={{fontSize:"40px"}}/> , title:"Payment" , desc:"secure system"},
]
export default function IconsSection(){
    return(
        <>
       <Container  maxWidth={false} sx={{mt:2}}>
       <Stack direction={"row"} sx={{alignItems:"center" , justifyContent:"space-evenly" , flexWrap :"wrap" , gap:1}}>
        {data.map((item) =>{
            return(
         
            <Box sx={{display:"flex" , alignItems:"center",justifyContent:"center" , gap:2 , width:"19rem" , height:"6rem", bgcolor:"#000" , flexGrow:1}}>
              {item.icon}
             <Stack> <Typography>{item.title}</Typography>  
              <Typography>{item.desc}</Typography>  </Stack>
            </Box>
       
            )
        })}
          </Stack>
       </Container>
        
        
        </>
    );
}