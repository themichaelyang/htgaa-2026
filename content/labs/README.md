## Labs
### To start a new week's lab writeup:
1. Right above the box which says `Search code…` click on `Add file` → `New file` and give it a name with the
   pattern <tt>&lt;<i>week-name</i>&gt;/_index.md</tt>, such as `week-01-lab-pipetting/_index.md`.
   (For convenience, see some suggested <tt>&lt;<i>week-name</i>&gt;</tt>s below.)
2. Inside that new file, make the first few lines of your file contain something like this: (including the `---`)
   ```
   ---
   title: 'Week 1 Lab: Pipetting'
   weight: 10
   ---
   ```
   The weight values are used to order the weeks; a good default is 10 * week number (so 10, 20, 30, ...).
3. Then write your homework assignment using [markdown](https://markdownguide.offshoot.io/cheat-sheet/)!
   (And for reference see the [HTGAA Editing Guide](https://pages.htgaa.org/2026a/course-pages/editing-guide/).)
4. Don't forget to scroll down and click the `Commit changes` button to save after making some additions or edits.
   After saving while you're still on that `_index.md`'s page you can click the pencil icon (next to the trash can on the
   far right) to go back into the editor.

To make it easier the first time around, Week 1 has already been started for you.

Remember, once you save you can view your published pages at https://pages.htgaa.org/2026a-michael-yang/


### Extra customization:
1. To add **images** to your pages,
   1. Upload the image: after you've saved your `_index.md`, click on the red <tt>&lt;<i>week-name</i>&gt;</tt> directory link
      a few lines down from the top.
   2. There, you can click on `Add file` → `Upload file` and either upload an image file you have locally or when it
      asks for a filename try giving it a URL to the image.
   3. Back inside your document (click on `_index.md` and edit it) you can include the image by using its filename in an
      [image link](https://pages.htgaa.org/2026a/course-pages/editing-guide/#images) (e.g. `![](myimage.jpg)`)
   4. Remember, if you put the word `feature` anywhere in an image's filename (e.g.
      <tt>featured-wooly-mammoth.webp</tt> or <tt>david-george-joe-feature.jpg</tt>) that image will
      automatically be placed inside the "card" for that page in a `{{% children type="card" %}}` (or `childrenof`) card listing
      (such as a list of all your labs, if you are specifying `type="card"`).
2. Page summaries are listed in cards or page listings; long ones are automatically generated, but you can create your own
   short description for those listings by adding between the `---` lines at the top of your markdown document a line such as:
   ```
   description: 'whatever you want the summary to be'
   ```


### Sample <tt>&lt;<i>week-name</i>&gt;</tt>s for labs
For your convenience here are some <tt>&lt;<i>week-name</i>&gt;</tt>s you could use (or create your own!):
* week-01-lab-pipetting/_index.md
* week-02-lab-dna-gel-art/_index.md
* week-03-lab-opentrons-art/_index.md
* week-04-lab-protein-design-part-i/_index.md
* week-05-lab-protein-design-part-ii/_index.md
* week-06-lab-gibson-assembly/_index.md
* week-07-lab-neuromorphic-circuits/_index.md
* week-09-lab-cell-free/_index.md
* week-10-lab-mass-spectrometry/_index.md
* week-11-lab-cloud-lab/_index.md
* week-12-lab-bioproduction/_index.md
