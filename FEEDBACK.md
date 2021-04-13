Great job, Princess! Overall, the project works and meets most of the requirements. The student components work really well. However, there are some parts of the campuses components that are a little buggy. I've listed them here and made comments in various files throughout.

* When you add a new campus, it appears on the page but without an image or the new of the campus. See comments in `campusThunks.js`.
* Updating a campus doesnt work. See comments in `EditCampus.js`.

You loop over the list of campuses to find an individual campus quite often. I typically think it's more efficient and easier to have a separate item in the state for an individual campus or student.

I also updated the webpack config file so that when errors occur, it gives you the specific file and line number where the error occurred. If you want to go back in and address some of these errors, it should be easier to understand where and why they are occuring.

Let me know if you want to talk through any of this feedback in office hours.
