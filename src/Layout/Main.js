// http://preview.themeforest.net/item/kindero-kindergarten-school-wordpress-theme/full_screen_preview/27292935?_ga=2.83826390.1976164277.1665283835-224596748.1665283835&_gac=1.47784277.1665283835.CjwKCAjwv4SaBhBPEiwA9YzZvGXY5oaQVCCNRRMg44KcmZpav6GLO8P9mEB2DFZ0cQYpCgUm47DRwBoCwzAQAvD_BwE


import React from 'react';
import {Outlet } from "react-router-dom";
import Navbar from '../Component/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default Main;