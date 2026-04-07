---
title: 'Week 6 HW: Genetic Circuits I'
weight: 10
---

1. What are some components in the Phusion High-Fidelity PCR Master Mix and what is their purpose?

The mix [includes](https://www.neb.com/en-us/products/m0531-phusion-high-fidelity-pcr-master-mix-with-hf-buffer#Protocols--Manuals-and-Usage): Phusion DNA Polymerase, deoxynucleotides and reaction buffer that has been optimized and includes MgCl2.

DNA Polymerase builds the DNA sequence from deoxynucleotides starting with the template strands and primer. It's high-fidelity, so it won't make as many errors as Taq.

Reaction buffer allows the reaction to take place.

2. What are some factors that determine primer annealing temperature during PCR?

For primer annealing, we want the template to be high enough for the template DNA to be denatured and but low enough that some of the primer is annealed. So the lab protocol suggests to use temperatures near the Tm of the primer (temp where the DNA is 50/50 double/single stranded).

Tm is higher with more G-C, because of the [three hydrogen bonds as opposed to the two hydrogen bonds with A-T](https://www.reddit.com/r/Mcat/comments/a50nhl/why_would_a_higher_content_of_gc_relative_to_at/
).

3. There are two methods from this class that create linear fragments of DNA: PCR, and restriction enzyme digests. Compare and contrast these two methods, both in terms of protocol as well as when one may be preferable to use over the other.

Restriction enzyme digests are limited to specific sequences in DNA, so we need to make sure that the target site has a existing restriction enzyme cut site nearby. After, we can ligate the strands, but this is non-specific, producing either blunt ends or short sticky ends, so sequences could be joined incorrectly. In PCR we can design short primers to add onto a DNA sequences to create specific sticky ends.

4. How can you ensure that the DNA sequences that you have digested and PCR-ed will be appropriate for Gibson cloning?

We can simulate a digest then run a gel through electrophoresis to see if the bands line up.

5. How does the plasmid DNA enter the E. coli cells during transformation?

From the protocol:

> In either of these methods, we shock the cells (either by applying an electrical shock or heat shock) which causes the cell membrane to “open up”. The plasmid now enters the cells by diffusion. After the shock, the cells are fed with SOC growth media and incubated for 1 hour in 37C. That one hour incubation filled with nutrients allows the cells to recover and to start multiplying, some with the plasmid inside. Last, we plate the transformed cells onto a selective media plate, which contains antibiotics.

We heat shock the E. coli to create pores in the bacteria.

6. Describe another assembly method in detail (such as Golden Gate Assembly)
  - Explain the other method in 5 - 7 sentences plus diagrams (either handmade or online).
  - Model this assembly method with Benchling or Asimov Kernel!

Golden Gate Assembly is similar to traditional restriction enzyme cloning, but it uses Type IIS instead of classic Type II restriction enzymes. Type IIS enzymes cut outside of the recognition site, unlike classic Type II which cuts in the recognition site. Cutting outside means that the sticky ends can be designed specifically for the joins. It's similar to Gibson assembly in that the reaction for multiple fragments can take place at the same time, so long as the overhangs are different. The insert can be PCR'ed to add the recognition sites with the overhangs, then ligated with any other fragments to the vector backbone.
