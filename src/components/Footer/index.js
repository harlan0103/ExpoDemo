import React from "react";
import { Fragment } from "react";
import './index.css';

const CustomFooter = () => {
    const space = (<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>);
    return(
        <div className="footer">
            <span>
                版权所有：世博研究发展（国际）联盟 { space } IPC备案号：
            </span>
        </div>
    );
};

export default CustomFooter;