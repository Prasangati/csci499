# CSCI 499-01  

Hey guys, I am going to give the basic guideline on how to set up the project. It is important we do it properly so we don't run into issues later. Hopefully, everyone has already cloned the project and thus, is using git to track and update any new developments. The first thing you need to do is set up a virtual enivorment. The commands should be run in the root directory. Also, note that I use python3/pip3 for the commands, but if they don't work, use python/pip. Here are the commands:
``` bash
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
```
The purpose of this is to create an isolated enviroment in our computer, where all the correct dependencies of the correction versions are installed. After this, every line in the commandline should start with "(venv)". If at anymore point, you dont see it and you need to run the backend, just go to the root directory and type the second command from above. Anyway, after the two commands, use another command to install the dependencies, which are in the requirements.txt file. 
``` bash
pip3 install -r requirements.txt
```
This will download all the requirements needed for the backend to work. The virtual enviroment is just for Python, since the dependencies for React don't require a virtual enviroment. 

