tt_content.stdWrap.dataWrap > 

fce.tabs = COA
fce.tabs{
    10 = COA
    10 {
        10 = RECORDS
        10.wrap = <ul>|</ul>
        10.source.current=1
        10.tables = tt_content
        10.conf {
            tt_content = COA
            tt_content{
                10 = TEXT
                10 {
                    field = header
                    dataWrap = <li><a href="#c{field:uid}">|</a></li>
                }
            }
        }
    } 
    20 = COA
    20 {
        10 = RECORDS
        10.source.current=1
        10.tables = tt_content
    } 
}


fce.accordion = COA
fce.accordion{
    20 = COA
    20 {
        20 = RECORDS
        20.source.current=1
        20.tables = tt_content
        20.conf.tt_content = COA
        20.conf.tt_content {
            10 = TEXT
            10 {
                field = header
                source.current=1
                dataWrap = <h3><a href="#c{field:uid}">|</a></h3>
            }            
            20 < tt_content
        }
    } 
}
