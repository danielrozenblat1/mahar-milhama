import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
 import image from "../images/מחר מלחמה קבוצה.png"

  import image6 from "../images/מחר מלחמה קבוצה 6.png"
  import image2 from "../images/מחר מלחמה קבוצה 2.png"
  import image3 from "../images/מחר מלחמה קבוצה 3.png"
  import image4 from "../images/מחר מלחמה קבוצה 4.png"
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (

    <ImageList
      sx={{
        width: "100dvw",
        height: "auto",
        objectFit:"contain",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: image,
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: image2,
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: image2,
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: image3,
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: image4,
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: image6,
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: image,
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: image,
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: image2,
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: image4,
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: image6,
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: image,
    title: 'Bike',
    author: '@southside_customs',
  },
];
