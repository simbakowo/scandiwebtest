import { Alert } from '@mui/material';
import useAlert from '../../hooks/useAlert';

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <Alert 
        className="w-full m-3 font-sans font-semibold text-sm"
        severity={type}
        sx={{
          position: 'absolute',
          zIndex: 10,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export {AlertPopup}


