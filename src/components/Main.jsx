import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Paper, styled } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slide.css';



const images = [
  "https://blog.f1000.com/wp-content/uploads/2019/06/Untitled-design-22.png",
  "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/10/14135243/Blood-Transfusion.jpg",
  "https://res.cloudinary.com/hype-legal/image/upload/c_fill,g_face:center,h_630,w_1200/clore/images/insights/blood-transfusion.jpg",
];
 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function AutoGrid() {
  return (
    <div >


      <Slide>
        <div className="each-slide-effect" >
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>

          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>

          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>

          </div>
        </div>
      </Slide>





      <br></br><br></br>



      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={3}>
          <Grid xs>
            <Item> <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://img2.storyblok.com/640x560/filters:focal(103x0:1337x1080):quality(80)/f/54881/1440x1080/11591e6d0e/pbm-2-new.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Why is it important to Donate blood?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    About 328 million people currently live in the U.S. Each year, approximately 6.8 million people in the U.S donate blood. Annually, this adds up to about 13.6 million units of whole blood collected for donation in the U.S. The Red Cross provides about 40% of our nation’s blood and blood cell components to donors. Your blood donations are used for patients in need of surgery, cancer treatment and transfusions for blood loss from traumatic injuries.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card></Item>
          </Grid>
          <Grid xs={3}>
            <Item>  <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://healthcare-in-europe.com/media/story_section_image/104/image-01-thumb-original.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Whole Blood Donation vs. Power Red Donation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    As the name implies, “whole blood” donation includes all of the contents within the blood. This includes red blood cells, white blood cells, platelets and plasma. Whole blood donations are typically used to help patients fight cancer, blood disorders and traumatic injuries.

                    The Power Red donation enables the donor to safely donate two units of red blood cells at just one appointment! The Power Red donation is similar to the whole blood donation, except a phlebotomist uses a special machine to ensure two units of exclusively red blood cells are collected. The machine returns the other blood components to you. Think of it as a more efficient way to yield more fuel for patients. The Red Cross highly encourages donors with O+, O-, A- and B- blood types to try a Power Red donation.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card></Item>
          </Grid>
          <Grid xs>
            <Item>  <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://ufhealth.org/assets/images/stories/_1200x630_crop_center-center_82_line/Patient-blood-management-photo-copy.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Who can donate blood?

                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The average human body has 4-6 litres of blood. Hence, a healthy person has enough blood that he/she can donate. However, there are certain conditions for blood donation. Only people who are healthy with required haemoglobin and platelets, between the ages of 18 and 65 years, and the ones who weigh at least 45 kgs are permitted to donate blood.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card></Item>
          </Grid>
          <Grid xs>
            <Item>  <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.psqh.com//app/uploads/2017/10/GettyImage_Jochen-Sands.2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Key Factors to Ensure Safe Blood Donation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Safe blood is vital for treatment and emergency intervention. It can help an individual suffering from dangerous ailments and also supports various surgical procedures. To stress the need and importance of blood donation, World Blood Donor Day is celebrated every year on 14 June. The purpose of this day is to make people aware of the need for safe blood and to express gratitude to blood donors.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card></Item>
          </Grid>
        </Grid>
      </Box>

    </div>





  );
};
