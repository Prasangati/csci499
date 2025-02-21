# CSCI 499-01  


Hey guys, I am going to give the basic guideline on how to set up the project. It is important we do it properly so we don't run into issues later. Hopefully, everyone has already cloned the project and thus, is using git to track and update any new developments. The first thing you need to do is set up a virtual enivorment. The commands should be run in the root directory. Also, note that I use python3/pip3 for the commands, but if they don't work, use python/pip. Here are the commands:
``` bash
python3 -m venv venv
```
Then:
```bash
source venv/bin/activate  # Mac/Linux
```
Or:
```bash
venv\Scripts\activate  # Windows
```
The purpose of this is to create an isolated enviroment in our computer, where all the correct dependencies of the correction versions are installed. After this, every line in the commandline should start with "(venv)". If at anymore point, you dont see it and you need to run the backend, just go to the root directory and type the second command from above. Anyway, after the two commands, use another command to install the dependencies, which are in the requirements.txt file. 
``` bash
pip3 install -r requirements.txt
```
This will download all the requirements needed for the backend to work. The virtual enviroment is just for Python, since the dependencies for React don't require a virtual enviroment. 
Then, go to the backend directory, which is the directory with manage.py, and run:
``` bash
python3 manage.py runserver
```
If there are no errors, you should get this link: (http://127.0.0.1:8000). If you click it, you will be taken to a webpage that has a 404 error. However, if you go to (http://127.0.0.1:8000/api/hello/), you will see this:
<img width="1108" alt="Screenshot 2025-02-19 at 7 43 10 PM" src="https://github.com/user-attachments/assets/bff9e34f-30e8-41b6-9c09-61ac80a6169a" />
If you do, great! Let's move on to the next. 

