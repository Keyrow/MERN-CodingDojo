import React from 'react'

const Tabs = props => {
    const { tabs, setTabs } = props;

    const changeTab = (e, i) => {
        const [...curTabs] = tabs;

        for (let tab of curTabs) {
            tab.selected = false;
        }

        curTabs[i].selected = true;
        setTabs(curTabs);
    }

    return (
        <div className="row">
            <div className="col-sm-12">

                {
                    tabs.map((tab, i) =>
                        <button key={i} onClick={e => changeTab(e, i)} className={tab.selected ? `col-sm-3 m-1 btn btn-primary` : `col-sm-3 m-1 btn btn-secondary`}>{tab.title}</button>
                    )
                }
            </div>
            <div className="col-sm-12">
                {
                    tabs.map((tab, i) => {
                        if (tab.selected) {
                            return <p key={i}>{tab.content}</p>
                        }
                    }
                    )
                }
            </div>
        </div>
    )
};

export default Tabs;