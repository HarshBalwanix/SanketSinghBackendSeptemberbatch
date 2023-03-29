/*
what is version control system
version- a particular state of a software.
vcs- A tool to manage version and changes in a software 
helps us to track changes.
manage version and their rollback
compare changes in version 
log the changes
collaboration

Git is a version control system

Git 
- open source
-easily maintains code integrity.
-secure
-flexibility.



Git init
- it initialises ur git repository(a folder whose changes is managed by git)

a new version- a new commit



How exactly git stores data?
internally git is a <key,value> data store.

key- hash of the data we want to store , 40 digit hexadecimal value,for same data this hash will be same.
value - actual data, git stores the compressed data in a blob(bif large object ) and some more metadata in the header.

Inside git content is only stored once.

How git handles directories?
Tree
it stores information about directories and their content.
tree contains pointers to other blobs and trees.

git internally does a lot of optimization, the objects are stored in compressed form.
it mainly stores data about the change and algorithmically shows us the file content with that change.

Commit object 
every commit object points to a tree.
the commit object has data of the author and committer
                                  date
                                  message
                                  Parent


Git branches-
lets say we want to do parallel task on multiple feature at same time.

 
*/