# Contributors

This markdown holds documentation and instructions for anyone who wants to be a
contributor to this repository

## Adding a new Kata

A Kata is simply a exercise to help people train. This means that a Kata can
take many forms. Since that is the case, the Kata CLI will simply copy all of
the files from a kata directory to the user directory.

### To add a new Deno based kata

- Create a new directory inside of the [kata-templates](../kata-templates/)
  directory. The name of this directory is the identifier users will type into
  the Kata CLI to initiate it
- Inside this new directory initiate a new Deno Project with the following bash
  command `deno init`
- Alter the contents of this folder to put the users in an ideal starting
  position to simply begin working the Kata. This may mean adding json files
  with data, or setting up some tedious part of the Kata for them.
  - consistency between Katas will help the users jump into new Katas. so look
    at some of the currently existing ones and try to keep them in mind.
