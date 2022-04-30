The frontend of the project is coded exclusively in React/Javascript and is contained with the UI folder
in the repo. The important element that is good to know with the code is that the majority of it is split up
into components that are called in by each other and the App.js file, which hosts the main navigation and routing
portion of the website. 

As it stands, there are three main pages, with those being a known devices page (also known as a registry), 
an unknown devices page, and a simple help page. There is code in the repo for a login page and the work needed
to be done to implement it is simply change some of the function to be compatible with the code and the website
as a whole.


Quick summary of each component:

AppHeader.js
------------
This component is simply there to host a fluid image that can remain at the top of the website and display the logo
of the project sponsor, Raytheon.

Directory.js
------------
One of the main pages of the website, this begins with the importing of all neccesary packages and components,
like that of the devices.json asset that is important by the fingerprinting script and the search function from
SearchList2. There is a timeout function at the top of the code that refreshes the website every 60 seconds. The
json object to be displayed on the website is called from the assets folder within the code repo and set as a list
of devices. The json object is also made sortable by using the .filter segment and designated the sortable col
to be the fingerprint. A simple search bar is made and styled and then the Search function is called, which is 
what actually displays the table. That searchList2 reads the json object from the assets folder and maps each element
to where it is supposed to be in the table.

Help.js
-----------
A simple customizable help page that can be edited to say anything the client wants. It is there so that there is
an option to describe anything going on in the website that may be useful to the security team or client.

Login.js
----------
This component is not fully implmented in the project yet, but the basis for it be is there and the majority of the
code in the file does work. The code is based off of a simple login system that takes the user input and reads that
in as a json object to check against the website's repo. There were some compatibility issues with the website and
the login page, but it should be fairly simple to fix should the client or team was the page to be implemented.

SearchList1/2.js
----------
The two searchlist functions are what display the tables that are seen in the website. They are called within 
Directory.js and UnknownDevices.js, with the directory one being sortable and the unknowndevices one being on 
the verge of being sortable. Each component creates the table that is seen and maps them to each col using a key.

UnknownDevices.js
----------
The other main webpage that displays the unknown devices on a website, this page works a tad differently than the
directory.js file, but they are very similar at their core. This component also has a reload webpage function at the
top of it and has the same declarations for importing as the directory component. However, there is a small script at
the top of this one that cleans the incoming json file and grabs the information that is needed to be displayed,
which is the mac address and time last seen. The sort functionality is not implmented for this table yet, but it would
be simple enough to do so using a similar method to the other webpage function. As mentioned above, the json object is made sortable
and then sent to the Searchlist1.js to be displayed, which also acts very similarly to the Searchlist2.j function.


Quick breakdown of the different folders within the code
-----------
There are a few different folders within the src code, with the main one obviously being the components that were
discussed above. Besides that one, there is an assets folder where the json files are imported into by the python
scripts, a css file that controls the styling for the website and the feather Icons file, which holds the majority
of the icons used by the website.

How to run
-----------
The website is fairly simple to run. The user should make sure that they have node.js installed on their machine and open the 
file up in visual studio code. Once the file is open, they should open the terminal and type in:
$npm i
This command npm should be included in the node.js download, but it will download all the required packages to run 
the project. Once that is done, the user should type in:
$npm start
This starts the website on the localhost and should open the website in a tab on their machine.
To stop the website, the user can run $npm stop, or they can cntrl-c the terminal to cancel the execution.

