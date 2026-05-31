import React from 'react';
import { Audio } from "react-loader-spinner";


const loading = () => {
    return (
        <div className="flex justify-center items-center w-full py-20">
            <Audio
              height="50"
              width="50"
              color="#5a00ff"
              ariaLabel="audio-loading"
              visible={true}
            />
          </div>
    );
};

export default loading;