import {SVG} from './svg.min.js';

/**
 * 
 *  @constructor
 */

var MyToolkit = (function() {

/**
 * 
 *     BUTTON
*     @Constructor Button
*     @param {string} s - Text on the button
*     @param {number} x - The width of the button
*     @param {number} y - The length of the button 
*/  
 
    function Button(){
        var draw = SVG().addTo('body').size('100%','20%');
        var btn = draw.rect(100,50).fill('#E5E7E9').radius(10)

        var label = draw.text("").font({size:20})
        // label.move(52, 105)
        var clickEvent = false
        var click_count=0

        btn.mousedown(function(){
            if(clickEvent == true){
                this.fill({ color: '#2ECC71'})
           }
            else{
            this.fill({ color: '#E5E7E9'})
            }
            console.log("Mouse moved down from the button")       
        })

        btn.mouseup(function(){
            if(clickEvent == true){
                this.fill({ color: '#2ECC71'})
            }
            else{
            this.fill({ color: '#E5E7E9'})
            }

            console.log("Mouse moved up from the button")            
        })

        btn.click(function(event){

            if(click_count==0)
            {
                this.fill('#2ECC71')
                console.log("Button is clicked")
                clickEvent= true
                console.log(clickEvent)
                click_count=1
            }
            
            else if(click_count ==1){
                this.fill({ color: '#AED6F1'})
                console.log("Button is Un-clicked")
                click_count =0
                clickEvent=false
            }
        })
        btn.mouseover(function(){
            if(clickEvent == true){
                this.fill({ color: '#2ECC71'})
                console.log("Mouse is over button")
            }
            else {
                this.fill({ color: '#AED6F1'})
                console.log("Mouse is over button")
            }
            
        })
        btn.mouseout(function(){
            if(clickEvent == true){
                this.fill({ color: '#2ECC71'})
                console.log("Mouse moved out of the button")
            }
            else{
            this.fill({ color: '#E5E7E9'})
            console.log("Mouse moved out of the button")
            }
            
        })

        
        
        return {

            push: function(s) {
                label.text(s);
            },

            move: function(x,y) {
                btn.move(x,y)
                label.move(x+5,y+15)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
/**
 * 
 *     CHECK BOX
 * 
 * 
 *  @Constructor CheckBox
     @param {string} s - The label for the radio check box
     @param {number} x - The x-coordinate placement of the checkbox
     @param {number} y - The y-coordinate placement of the checkbox 
     

 */
    function CheckBox(){
        var draw1 = SVG().addTo('body').size('100%','100%');
        
        // Box
        // var box1 = draw1.rect(30,30).fill('#D0D3D4')
        var box1_inside = draw1.rect(30,30).fill('#E5E7E9')

        // Check mark
        var b1_check1= draw1.line(0,0,10,10)
        var b1_check2 = draw1.line(0,20,13,0)

        // Options
        var opt1 = draw1.text("").font({size:22})
        // opt1.move(70,30)

        // Box seleted
        var b1= false

        var b1_count= 0
 

        // Check-box 1

        box1_inside.click(function(event){
            if(b1_count == 0 ){
                b1_check1.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                console.log("Check box is clicked and option is selected")
                b1= true
                b1_count=1
                console.log(b1)
            }
            else if(b1_count ==1){
                b1_check1.stroke({ color: 'white', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: 'white', width: 2, linecap: 'round' })
                console.log("Check box is clicked and option is Un-selected")
                b1= false
                b1_count=0
                // console.log(b1)
            }
        })

        box1_inside.mouseover(function(){
            if(b1 == true){
                b1_check1.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
            }
            else{
                b1_check1.stroke({ color: 'white', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: 'white', width: 2, linecap: 'round' })
                 
            }
            console.log("Mouse is over the check box ") 
            
        })

        box1_inside.mouseup(function(){
            if(b1 == true){
                b1_check1.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
            }
            else{
                b1_check1.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                // this.fill({ color: '#2ECC71'})  
            }
            console.log("Mouse went up from the check box ")            
        })

        box1_inside.mousedown(function(){
            if(b1 == true){
                b1_check1.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
            }
            else{
                b1_check1.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                // this.fill({ color: '#2ECC71'})  
            }
            console.log("Mouse went up from the check box ")            
        })

        box1_inside.mouseout(function(){
            if(b1 == true){
                b1_check1.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#2ECC71', width: 2, linecap: 'round' })
            }
            else{
                b1_check1.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                b1_check2.stroke({ color: '#E5E7E9', width: 2, linecap: 'round' })
                // this.fill({ color: '#2ECC71'})  
            }
            console.log("Mouse moved out of the check box ")            
        })
        return {
            push: function(s) {
                opt1.text(s);
            },
            move: function(x,y) {
                box1_inside.move(x,y);
                b1_check1.move(x+4, y+15);
                b1_check2.move(x+13, y+5);
                opt1.move(x+46,y+3);
            },
            onclick: function(eventHandler){
                b1 = eventHandler
            }
        }
    }
     
/**
 * 
 *   RADIO BUTTON
 * 
 * 
 *  @Constructor 
     @param {object} n - The array list contaning the radio button label and their status
     @param {number} x - The x-coordinate placement of the radio button
     @param {number} y - The y-coordinate placement of the radio button 

 * 
 */

    function RadioButton(){
        
        var draw1 = SVG().addTo('body').size('100%','200');

        // Array with all the options name and state
        var opt_array = []

        // Array with radio circle + position
        var but= []

        // Array of all checked/ unchecked buttons
        var checked= []

        // Array of all the button name
        var label=[]

        var r1= null

        return {

            options: function(n){
                opt_array= n;
            },
            move: function(x,y) {

                var count=0
                for(var i = 0; i < opt_array.length; i=i + 2){
                    // Radio button - Circle
                   but[count] = draw1.circle(80).radius(12)
                   but[count].move(x, y + (count * 55))

                   if(opt_array[i+1] == true)
                    {
                        but[count].fill({color: '#2ECC71'})
                    }
                    else{
                        but[count].fill({color: '#E5E7E9'})
                    }
                    document.getElementById(but[count]).Id= count;

                    count++
                              
                   }
                
                   var c=0
                for(var i = 0; i < (opt_array.length) ; i=i+2){

                    //Radio button status
                    checked[c]= opt_array[i+1]
                                        
                    // Radio button label
                    label[i]= draw1.text(opt_array[i]).font({size:24})
                    
                    // Radio button(s) layout
                    if(i == 0){
                        label[i].move(x+42, y-3)  
                    }
                    else{
                        label[i].move(x+42, y+(i*27))   
                    }
                    c++

                }         

                window.onmouseover = e => {
                //    console.log(e.target.Id)
                    if(e.target.Id != undefined)
                    {
                        var ind = e.target.Id
                    //    console.log(e.target.Id)
                        
                        var num= ind + 1

                        console.log(ind)
                        if (checked[ind] == false){
                            but[ind].fill({color: '#AED6F1'})
                        }
                        
                        if(checked[ind]==true){
                            but[ind].fill({color: '#2ECC71' })
                        }


                        but[ind].mouseover(function(){
                            console.log("over")
                            
                            if(checked[ind] == true){
                                    but[ind].fill({color: '#2ECC71' })
                                }
                            if(checked[ind] == false){
                                but[ind].fill({color: '#AED6F1'})
                            }
                            console.log("Mouse is over radio button #" + num)  
                        })
                        
                        but[ind].mouseout(function(){
                            console.log(checked[ind])
                            if(checked[ind] == true){
                                but[ind].fill({color: '#2ECC71'}) 
                            }
                            else{
                                but[ind].fill({color: '#E5E7E9'})
                            }  
                            console.log("Moved out of radio button #" + num)  
                        })  

                        but[ind].click(function(event){

                            for(var j = 0; j< but.length ; j++)
                            {
                                checked[j]=false
                                but[j].fill({color: '#E5E7E9'})
                            }
                            checked[ind]=true
                            but[ind].fill({color: '#2ECC71'})

                            console.log("Radio Button " + num + " was selected")
                        }) 


                        but[ind].mouseup(function(){
                            if(checked[ind] == true){
                                but[ind].fill({color: '#2ECC71'}) 
                            }
                            else{
                                but[ind].fill({color: '#E5E7E9'})
                            }  
                            console.log("Moved up from radio button #" + num)  
                        })  

                        but[ind].mousedown(function(){
                            if(checked[ind] == true){
                                but[ind].fill({color: '#2ECC71'}) 
                            }
                            else{
                                but[ind].fill({color: '#E5E7E9'})
                            }  
                            console.log("Moved down from radio button #" + num)  
                        })  


                       }
                    }
             },

            onclick: function(eventHandler){
                r1 = eventHandler

            }
        }
    }


/**
 * 
 * 
 * TextBox
 *      By clicking on the textfield, user can view thier inputed text * 
 *  @constructor
 * 
 */
    function TextBox(){
        
        var draw1 = SVG().addTo('body').size('100%','100%');

        // Text box
        var tbox = draw1.rect(370,50).fill('#E5E7E9').move(24,55)
        var tbox_inside= draw1.rect(360,40).fill('white').move(29,60)

        var clickEvent =null;

        // caret
        var caret= draw1.line(0,0,0,25)
        var count=0;

        // User text
        var str = draw1.text("").move(36, 58).font({size:22})
        SVG.on(window,'keyup', (event) => {
            
            if(event.keyCode > "47" && event.keyCode < "91"){
                count= (12*str.text().length);
                // caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(36+count, 67)
                tbox_inside.mouseover(function(){
                    caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(count+36,67)
                    console.log("Mouse is over text box")  
                    })
                str.text(str.text() + event.key)
                console.log("Text inputted")
                // console.log(str.text().width);
            }
            else if(event.keyCode > "185" && event.keyCode <= "222"){
                count= count+ 5;
                // caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(36+count, 67)
                tbox_inside.mouseover(function(){
                    caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(count+36,67)
                    console.log("Mouse is over text box")  
                    })
                str.text(str.text() + event.key)
                console.log("Text inputted")
            }
            else if(event.keyCode == "8"){
                count = count -10;
                tbox_inside.mouseover(function(){
                    caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(count+30,67)
                    console.log("Mouse is over text box")  
                    })
                // caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(30+count, 67)
                str.text(str.text().substr(0,(str.text().length)-1))
                console.log("Backspace was pressed")
            }
            else if(event.keyCode == "32"){
                count= (12*str.text().length) + 5;
                tbox_inside.mouseover(function(){
                    caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(count+40,67)
                    console.log("Mouse is over text box")  
                    })
                // caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(40+count, 67)
                str.text(str.text()+" ")
                console.log("Spacebar was pressed")
            }
            else if(event.keyCode == "16"){
                count= count+ 15;
                console.log("Shift was pressed")
            }
            
        })

        // clicked
 
        tbox_inside.mouseover(function(){
            caret.stroke({ color: 'pink', width: 2, linecap: 'round' }).move(count+36,67)
            console.log("Mouse is over text box")  
            })
    
        tbox_inside.mouseout(function(){
            caret.stroke({ color: 'white', width: 2, linecap: 'round' })
            console.log("Mouse moved out of the text box")  
            })

        tbox_inside.click(function(event){
            console.log("The Text: " + str.text())
            
        })

        return {

            onclick: function(eventhandler){
                clickEvent = eventhandler;
            }
        }
    }

/**
 * 
 * 
 *   SCROLL BAR

        There are two ways to scroll through the text:
            1. By clicking anywhere on the knob (top, middle, or bottom )
            2. By clicking anywhere on the track
 * 
 *  @Constructor
 *  @param {number} y - The length of the scroll bar
*/

    function Scrollbar(){
        
        var draw1 = SVG().addTo('body').size('100%','300');

        var getPosition_x;
        var getPosition_y;

        var getPosition= []

        // clicked
        var clickEvent= null

        return {
            height: function(y) {


                // Text
               var bar_length= (y/3)

                // Scroll bar
                var sbar_bakground = draw1.rect(34,y+4).fill('#d8d9da').move(24,48);
                var sbar = draw1.rect(30,y).fill('#F2F4F4').move(26,50);
                
                

                // // Arrows
                var arrow_top= draw1.rect(34,10).fill('#d8d9da').move(24,40)
                var arrow_bottom= draw1.rect(34,10).fill('#d8d9da').move(24,50+y)

                // Knob
                if(y>=160){
                    var stab=draw1.rect(25,y-6).fill('#B3B6B7').radius(10).move(28.5,52)
                    // stab.draggable()
                    // getPosition[0] =44 
                    // getPosition[1] = 52
                   
                }
                else{
                    var stab=draw1.rect(25,bar_length).fill('#B3B6B7').radius(5).move(28.5,52)
                    // stab.draggable()
                    // getPosition[0] =44 
                    // getPosition[1] = 52
                }

                getPosition[0] = 44 
                getPosition[1] = 53
                
               sbar.click(function(event){
                    // console.log(event.offsetY)
                   
                    if((((event.offsetY-50)+(bar_length/2))+4 <= y ))
                     {   
                         var tot= (event.offsetY-(bar_length/2))+10
                             console.log('Clicked on the scroll bar <=y ')
                            //  console.log((event.offsetY-(bar_length/2))+4)
                       
                             if(tot < y/2){
                            console.log('< y/2')
                            stab.move(28.5,53)
                            getPosition_x =44 
                            getPosition_y = 52
                        }
                        else if(tot >= y/2){
                           
                            var f= (tot+y-bar_length)/2
                            if(f <50){
                                stab.move(28.5, 53)
                                getPosition[0] =44 
                                getPosition[1] = 52
                            }
                            else{
                            stab.move(28.5,f-10)
                            getPosition[0] =44 
                            getPosition[1] = f-10
                            }  }
                        
                        
                        else if(tot+bar_length < y && y-bar_length < 50){
                            console.log('Clicked on the scroll bar <=y  < ')
                            stab.move(28.5,53)
                            getPosition[0] =44 
                            getPosition[1] = 52
                        }
                        else if(tot+bar_length < y && tot+bar_length < 50)
                        {
                            console.log('Clicked on the scroll bar <=y <50')
                            stab.move(28.5, 53)
                            getPosition[0] =44 
                            getPosition[1] = 52
                        }

                     }
                    else if ((((event.offsetY-50)+(bar_length/2))+4 > y)) {

                        var tot= (y-bar_length)+50
                        // console.log((event.offsetY+(bar_length/2))+4)
                        console.log('Clicked on the scroll bar else >y ')
                        stab.move(28.5, tot)
                        getPosition[0] =44 
                        getPosition[1] = tot
                    }
                    else if(((event.offsetY-(bar_length/2))+10)+bar_length < 53){
                        console.log('Clicked on the scroll bar else <53')
                        // console.log(((event.offsetY-(bar_length/2))+10)+bar_length)
                        stab.move(28.5, 53)
                        getPosition[0] =44 
                        getPosition[1] = 52
                    }

                    if(clickEvent !=null)
                        clickEvent(event)
                })

                stab.click(function(event){

                    if((((event.offsetY-50)+(bar_length/2))+4 <= y ))
                     {   
                         var tot= (event.offsetY-(bar_length/2))+10
                             console.log('Clicked on the knob')
                            //  console.log((event.offsetY-(bar_length/2))+4)
                       
                             if(tot < y/2){
                                stab.move(28.5,53)
                                getPosition[0] =28.5 
                                getPosition[1] = 53
                            }
                        else if(tot >= y/2){
                            var f= (tot+y-bar_length)/2
                            if(f <50){
                                stab.move(28.5, 53)
                                getPosition[0] =28.5 
                                getPosition[1] = 53
                            }
                            else{
                            stab.move(28.5,f-10)
                            getPosition[0] =28.5 
                            getPosition[1] = f-10
                        }
                        }
                        else if(tot+bar_length < y && y-bar_length < 50){
                            console.log('Clicked on the knob')
                            stab.move(28.5,53)
                            getPosition[0] =28.5 
                            getPosition[1] = 53
                        }
                        else if(tot+bar_length < y && tot+bar_length < 50)
                        {
                            console.log('Clicked on the knob')
                            stab.move(28.5, 53)
                            getPosition[0] =28.5 
                            getPosition[1] = 53
                        }

                     }
                    else if ((((event.offsetY-50)+(bar_length/2))+4 > y)) {

                        var tot= (y-bar_length)+50
                        // console.log((event.offsetY+(bar_length/2))+4)
                        console.log('Clicked on the scroll bar else >y ')
                        stab.move(28.5, tot)
                        getPosition[0] =28.5 
                        getPosition[1] = tot
                    }
                    else if(((event.offsetY-(bar_length/2))+10)+bar_length < 53){
                        console.log('Clicked on the scroll bar else <53')
                        // console.log(((event.offsetY-(bar_length/2))+10)+bar_length)
                        stab.move(28.5, 53)
                        getPosition[0] =28.5 
                        getPosition[1] = 53
                    }

                    if(clickEvent !=null)
                        clickEvent(event)
                })
            
                stab.mouseover(function(){
                    stab.fill({color: '#797D7F'})
                    console.log("Mouse is over scroll tab")  
                    })
            
                stab.mouseout(function(){
                    stab.fill({color: '#B3B6B7'})
                    console.log("Mouse moved out of the scroll tab")  
                    })
            
                

            },
            getPos: function(){
                return getPosition
            },
            onclick: function(eventhandler){
                clickEvent = eventhandler;

            }
        }
    }

    /**
     * 
     *  PROGRESS BAR
     *   -  To view the increment values, user can click anywhere on the progress bar
     * 
     * 
     * @constructor
     *  @param {number} x - The width of the progress bar
     *  @param {number} y - The incement value of the progress bar 
     */

    function ProgressBar(){


        var inc =0
        var clickEvent = null
        return {
            move: function(x,y) {

                var draw = SVG().addTo('body').size('100%', '100%')
                var prog_back = draw.rect(x,30).fill('#E5E7E9').radius(20)
                prog_back.move(20,20)
                inc= (y/100)*x;

                var prog = draw.rect(inc, 30).fill('#2ECC71').radius(20)
                prog.move(22,20)

                prog.click(function(event){
                   console.log("The increments are: " + y/x)
                })
            },

            getIncr: function(){
                return inc;
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }

    /**
     * 
     *  RANKING

        This widget allows users to rank the four options as they like.
        - Clicking on the widget in the order of the rank will display the ranking number.
        - To change the rank of the options, user would have to click on the descending order until 
            reached to their desired box
     * 
     * 
     * @constructor
     * @param {string} a - The label of the ranking box #1
     * @param {string} b - The label of the ranking box #2
     * @param {string} c - The label of the ranking box #3
     * 
     */
            

    function Ranking() {
        var draw = SVG().addTo('body').size('100%','250');

        // Count display
        var count = draw.text("");

        // Four boxes
        var box1 = draw.rect(30,30).fill('#E5E7E9').move(24,10)
        var box2 = draw.rect(30,30).fill('#E5E7E9').move(24, 60)
        var box3 = draw.rect(30,30).fill('#E5E7E9').move(24, 110)

        // Four options
        var opt1 = draw.text("").font({size:22}).move(74,5)
        var opt2 = draw.text("").font({size:22}).move(74,53)
        var opt3 = draw.text("").font({size:22}).move(74,102)

        var clickEvent = null
        var rank_count=1;

        if (b1 == false & b2 == false & b3 == false){
            rank_count = 1;
        }



        // Check button status
        var b1 = false;
        var b2 = false;
        var b3 = false;


        // Check Un-Check
        var b1_count=0;
        var b2_count =0;
        var b3_count = 0;


        // Box 1
        var count1 = draw.text("").move(35, 5);

        box1.mouseover(function(){
            if (b1 == true){
                box1.fill({ color: '#2ECC71'})
            }
            else{
                box1.fill({ color: '#AED6F1'})
                count1.text((rank_count-1).toString());
                count1.font({size: 22, fill: '#AED6F1'});
            }
            console.log("Mouse is over box 1")
        })
        box1.mouseout(function(){
            if (b1 == true){
                box1.fill({ color: '#2ECC71'})
            }
            else{
                box1.fill({ color: '#E5E7E9'})
                count1.text((rank_count-1).toString());
                count1.font({size: 22, fill: '#E5E7E9'});
            }
            console.log("Mouse moved out of box 1")

        })
        box1.mouseup(function(){
            if (b1 == true){
                box1.fill({ color: '#2ECC71'})
            }
            else{
            box1.fill({ color: '#E5E7E9'})
            }

            console.log("Mouse moved up fom box 1")

        })

        box1.click(function(event){
            b1 = true;
            b1_count++;
            console.log(b1_count)
            if(b1_count%2 == 0){
                rank_count--;
                if(rank_count == 0){
                    rank_count =1;
                }
                b1 = false;
                box1.fill({ color: '#E5E7E9'});
                count1.text((rank_count-1).toString());
                count1.font({size: 22, fill: '#E5E7E9'});

                console.log("Box 1 was un-selected")
                

            }
            else{
                console.log("rank: " + rank_count);
                if(b2==false & b1== true & (rank_count+1) == 3 & b3 == true){
                    rank_count = 1;
                }
                
                count1.text(rank_count.toString());
                count1.font({size: 22, fill: 'black'});
                rank_count++;
                box1.fill({ color: '#2ECC71'})
                console.log("Box 1 selected")
            }

                if(clickEvent != null)
                    clickEvent(event)
        })

              // Box 2
              var count2 = draw.text("").move(35, 55);
              box2.mouseover(function(){
                if (b2 == true){
                    box2.fill({ color: '#2ECC71'})
                }
                else{
                    box2.fill({ color: '#AED6F1'})
                    count2.text((rank_count-1).toString());
                    count2.font({size: 22, fill: '#AED6F1'});
                }
                console.log("Mouse is over box 2")
            })
            box2.mouseout(function(){
                if (b2 == true){
                    box2.fill({ color: '#2ECC71'})
                }
                else{
                    box2.fill({ color: '#E5E7E9'})
                    count2.text((rank_count-1).toString());
                    count2.font({size: 22, fill: '#E5E7E9'});
                }
                console.log("Mouse moved out of box 2")
    
            })
            box2.mouseup(function(){
                if (b2 == true){
                    box2.fill({ color: '#2ECC71'})
                }
                else{
                box2.fill({ color: '#E5E7E9'})
                }
    
                console.log("Mouse moved up fom box 2")
    
            })
            box2.click(function(event){
                b2 = true;
                b2_count++;
                console.log(b2_count)
                if(b2_count%2 == 0){
                    rank_count--;
                    if(rank_count == 0){
                        rank_count =1;
                    }
                    b2 = false;
                    box2.fill({ color: '#E5E7E9'});
                    count2.text((rank_count-1).toString());
                    count2.font({size: 22, fill: '#E5E7E9'});
                    
                    console.log("Box 2 was un-selected")
                    
    
                }
                else{
                    
                    if(b2==true & b1== false & (rank_count) == 3 & b3 == true){
                        console.log("rank: " + rank_count);
                        rank_count = 1;
                    }
                    console.log("rank_Count: "+ rank_count)
                    count2.text(rank_count.toString());
                    count2.font({size: 22, fill: 'black'});
                    rank_count++;
                    box2.fill({ color: '#2ECC71'})
                    console.log("Box 2 selected")
                }

                if (b1 == false & b2 == false & b3 == false){
                    rank_count = 1;
                }
    
                    if(clickEvent != null)
                        clickEvent(event)
            })

            
            

            // Box 3
            var count3 = draw.text("").move(35, 102);
            box3.mouseover(function(){
              if (b3 == true){
                  box3.fill({ color: '#2ECC71'})
              }
              else{
                  box3.fill({ color: '#AED6F1'})
                  count3.text((rank_count-1).toString());
                  count3.font({size: 22, fill: '#AED6F1'});
              }
              console.log("Mouse is over box 3")
          })
          box3.mouseout(function(){
              if (b3 == true){
                  box3.fill({ color: '#2ECC71'})
              }
              else{
                  box3.fill({ color: '#E5E7E9'})
                  count3.text((rank_count-1).toString());
                  count3.font({size: 22, fill: '#E5E7E9'});
              }
              console.log("Mouse moved out of box 3")
  
          })
          box3.mouseup(function(){
              if (b3 == true){
                  box3.fill({ color: '#2ECC71'})
              }
              else{
              box3.fill({ color: '#E5E7E9'})
              }
  
              console.log("Mouse moved up fom box 3")
  
          })
          box3.click(function(event){
              b3 = true;
              b3_count++;
              console.log(b3_count)
              if(b3_count%2 == 0){
                  b3 = false;
                  rank_count--;
                  if(rank_count == 0){
                    rank_count =1;
                }
                  box3.fill({ color: '#E5E7E9'});
                  count3.text((rank_count-1).toString());
                  count3.font({size: 22, fill: '#E5E7E9'});
                  console.log("Box 3 was un-selected")
                  
  
              }
              else{
                if(b2==true & b1== false & (rank_count+1) == 3 & b3 == true){
                    console.log("rank: " + rank_count);
                    rank_count = 1;
                }
                  count3.text(rank_count.toString());
                  count3.font({size: 22, fill: 'black'});
                  rank_count++;
                  box3.fill({ color: '#2ECC71'})
                  console.log("Box 3 selected")
              }

              if (b1 == false & b2 == false & b3 == false){
                rank_count = 1;
            }
  
                  if(clickEvent != null)
                      clickEvent(event)
          })



        return {
            setOptions: function(a,b,c,) {
                opt1.text(a);
                opt2.text(b);
                opt3.text(c);

            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }

return {Button, CheckBox, RadioButton, TextBox, Scrollbar, ProgressBar, Ranking} 
}());

export{MyToolkit}