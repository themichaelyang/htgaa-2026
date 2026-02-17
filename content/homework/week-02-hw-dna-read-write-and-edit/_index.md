---
title: 'Week 2 HW: DNA Read, Write, and Edit'
weight: 10
---

# Part 0: Basics of Gel Electrophoresis

I watched the lecture, recitation, and read the lab. Essentially, we use the negative charge of DNA to pull DNA fragments towards a positive cathode in an porous agarose gel. Larger DNA fragments move slower in the agarose gel.

# Part 1: Benchling & In-silico *Gel Art*

<style>
p:has(> a.lightbox-link > img) {
  display: flex;
  gap: 1em;
  align-items: flex-start;
}

img {
  max-height: 40vh;
}

/*
img[src*="gel-art-screenshot"],
img[src*="virtual-digest-benchling"],
img[src*="tblastn-miraculin"] {
  max-height: 30vh;
}*/
</style>

I spent some time playing around with Ronan's gel art site to make a pattern (below on the left). I noticed that some of the restriction enzymes in the gel art tool weren't on the HTGAA enzyme list, so I didn't use them them.

I think it looks kind of like Darth Vader.

Then, I added the Lambda DNA to Benchling. I made a custom enzyme list with the EcoRI, HindIII, BamHI, KpnI, EcoRV, SacI, and SalI. Then, I added the restriction enzymes from the gel art tool to make a virtual digest (below on the right). I had some difficulty ordering the digests properly, so I saved them with the names and ordered them by dragging the tabs after.

<!-- No empty line separating so they're in the same paragraph tag -->
![images/week-02/gel-art-screenshot.png](images/week-02/gel-art-screenshot.png)
![images/week-02/virtual-digest-benchling.png](images/week-02/virtual-digest-benchling.png)

## Part 2: Gel Art - Restriction Digests and Gel Electrophoresis (Wet Lab)

N/A: This is optional for committed listeners and I didn't have access to a wet lab this week.

## Part 3: DNA Design Challenge

### 3.1. Choose your protein

The protein I chose is [Miraculin](https://en.wikipedia.org/wiki/Miraculin), which is from the miracle berry and famous for temporarily causing sour things to taste sweet. I picked this because I have tried a miracle berry tasting before and it was an interesting experience.

Here is the [UniProt entry](https://www.uniprot.org/uniprotkb/P13087/entry) for Miraculin. UniProt also tags a number of other [taste-modifying proteins](https://www.uniprot.org/keywords/KW-0776).

The sequence for Miraculin (in FASTA) is:

```fasta
>sp|P13087|MIRA_SYNDU Miraculin OS=Synsepalum dulcificum OX=3743 PE=1 SV=3
MKELTMLSLSFFFVSALLAAAANPLLSAADSAPNPVLDIDGEKLRTGTNYYIVPVLRDHG
GGLTVSATTPNGTFVCPPRVVQTRKEVDHDRPLAFFPENPKEDVVRVSTDLNINFSAFMP
CRWTSSTVWRLDKYDESTGQYFVTIGGVKGNPGPETISSWFKIEEFCGSGFYKLVFCPTV
CGSCKVKCGDVGIYIDQKGRRRLALSDKPFAFEFNKTVYF
```

### 3.2. Reverse Translate

I used *tblastn* (Translated BLAST) to get the nucleotide sequence that corresponds with Miraculin. This found two nucleotide sequences in a database: [AB512278.1](https://www.ncbi.nlm.nih.gov/nucleotide/AB512278.1?report=genbank&log$=nuclalign&blast_rank=1&RID=T8AYFD0F014) and [D38598.1](https://www.ncbi.nlm.nih.gov/nucleotide/D38598.1?report=genbank&log$=nuclalign&blast_rank=2&RID=T8AYFD0F014). One appears to be the mRNA rather than the genes.

<!-- Empty image to force a paragraph parent -->
![images/week-02/tblastn-miraculin.png](images/week-02/tblastn-miraculin.png)
![]()

Here is the FASTA for the gene, from AB512278.1:

```fasta
>AB512278.1 Synsepalum dulcificum RdMIR gene for miraculin, complete cds
ATGAAGGAATTAACAATGCTCTCTCTCTCGTTCTTCTTCGTCTCTGCATTGTTGGCAGCAGCGGCCAACC
CACTGCTTAGTGCAGCGGATTCGGCACCCAACCCGGTTCTTGACATAGACGGAGAGAAACTCCGGACGGG
GACCAATTATTACATTGTGCCGGTGCTCCGCGACCATGGCGGCGGCCTTACAGTATCCGCCACCACCCCC
AACGGCACCTTCGTTTGTCCACCCAGAGTTGTCCAAACACGAAAGGAGGTCGACCACGATCGCCCCCTCG
CTTTCTTTCCAGAGAACCCAAAGGAAGACGTTGTTCGAGTCTCCACCGATCTCAACATCAATTTCTCGGC
GTTCATGCCCTGTCGTTGGACCAGTTCCACCGTGTGGCGGCTCGACAAATACGATGAATCCACGGGGCAG
TACTTCGTGACCATCGGCGGTGTCAAAGGAAACCCAGGTCCCGAAACCATTAGTAGCTGGTTTAAGATTG
AGGAGTTTTGTGGTAGTGGTTTTTACAAGCTTGTTTTCTGTCCCACCGTTTGTGGTTCCTGCAAAGTAAA
ATGCGGAGATGTGGGCATTTACATTGATCAGAAGGGAAGAAGGCGTTTGGCTCTCAGCGATAAACCATTC
GCATTCGAGTTCAACAAAACCGTATACTTCTAA
```

### 3.3. Codon optimization

I used [VectorBuilder's codon optimization tool](https://en.vectorbuilder.com/tool/codon-optimization/06a4db03-33f1-400a-93c7-d5eccb005ffc.html) since Twist's was down for maintenance. I optimized for E. Coli, so the protein could be mass produced in its "cellular factory". It gave the following:

> Pasted Sequence: GC=51.43%, CAI=0.56
>
> Improved DNA[1]: GC=55.81%, CAI=0.94

```
ATGAAAGAACTGACCATGCTGAGCCTGAGCTTCTTTTTTGTGAGCGCGCTGCTGGCGGCGGCAGCGAACCCGCTGCTGAGCGCGGCAGATAGCGCGCCGAACCCGGTGCTGGATATTGATGGCGAAAAACTGCGCACCGGCACCAATTATTATATTGTGCCGGTGCTGCGCGACCATGGCGGCGGCCTGACCGTAAGCGCGACTACCCCGAACGGCACCTTTGTGTGCCCGCCGCGTGTCGTGCAGACCCGCAAAGAAGTGGACCACGATCGCCCGCTGGCCTTCTTTCCGGAAAACCCGAAAGAAGATGTGGTGCGCGTGAGCACCGATCTGAACATTAACTTCAGCGCCTTCATGCCGTGCCGTTGGACCAGCTCGACCGTTTGGCGCCTGGATAAATATGATGAAAGCACCGGCCAGTACTTTGTTACCATTGGCGGCGTTAAAGGCAACCCGGGCCCGGAAACCATTAGCTCGTGGTTCAAAATTGAAGAATTTTGCGGCAGCGGCTTTTACAAACTGGTGTTTTGCCCGACCGTGTGCGGCAGCTGTAAAGTGAAATGCGGCGACGTGGGCATTTATATTGATCAGAAAGGCCGTCGCCGCCTGGCCCTGAGCGATAAACCGTTCGCGTTTGAATTTAACAAAACCGTGTATTTCTAA
```

## 3.4. You have a sequence! Now what?

Since I chose E. Coli, we can order the gene with a promoter in a plasmid, then use a cell-dependent method of heat shocking the E. Coli to embed the plasid, then cultivating the E. Coli to produce lots of this protein.

This uses the natural plasmid gene expression mechanisms of E. Coli to transcribe and translate the protein.

# Part 4: Prepare a Twist DNA Synthesis Order

I followed the steps to make provided sfGFP sequence in Benchling. Here is [my Benchling project](https://benchling.com/s/seq-ulqEgm6yogDWhYf7bt9E?m=slm-3ethR7RSz2VuvDjsf7PP).

Here is the FASTA file of the expression casette:

```
>E. coli sfGFP
TTTACGGCTAGCTCAGTCCTAGGTATAGTGCTAGCCATTAAAGAGGAGAAAGGTACCATGAGCAAAGGAGAAGAACTTT
TCACTGGAGTTGTCCCAATTCTTGTTGAATTAGATGGTGATGTTAATGGGCACAAATTTTCTGTCCGTGGAGAGGGTGA
AGGTGATGCTACAAACGGAAAACTCACCCTTAAATTTATTTGCACTACTGGAAAACTACCTGTTCCGTGGCCAACACTT
GTCACTACTCTGACCTATGGTGTTCAATGCTTTTCCCGTTATCCGGATCACATGAAACGGCATGACTTTTTCAAGAGTG
CCATGCCCGAAGGTTATGTACAGGAACGCACTATATCTTTCAAAGATGACGGGACCTACAAGACGCGTGCTGAAGTCAA
GTTTGAAGGTGATACCCTTGTTAATCGTATCGAGTTAAAGGGTATTGATTTTAAAGAAGATGGAAACATTCTTGGACAC
AAACTCGAGTACAACTTTAACTCACACAATGTATACATCACGGCAGACAAACAAAAGAATGGAATCAAAGCTAACTTCA
AAATTCGCCACAACGTTGAAGATGGTTCCGTTCAACTAGCAGACCATTATCAACAAAATACTCCAATTGGCGATGGCCC
TGTCCTTTTACCAGACAACCATTACCTGTCGACACAATCTGTCCTTTCGAAAGATCCCAACGAAAAGCGTGACCACATG
GTCCTTCTTGAGTTTGTAACTGCTGCTGGGATTACACATGGCATGGATGAGCTCTACAAACATCACCATCACCATCATC
ACTAACCAGGCATCAAATAAAACGAAAGGCTCAGTCGAAAGACTGGGCCTTTCGTTTTATCTGTTGTTTGTCGGTGAAC
GCTCTCTACTAGAGTCACACTGGCTCACCTTCGGGTGGGCCTTTCTGCGTTTATA
```

I imported that into Twist and added the vector. Here is [a link to the Benchling project](https://benchling.com/s/seq-v7XHNWNQouN8c00oUWns?m=slm-zfKDRpXJmPQDFfPAyAMe) with the Twist draft order.

![images/week-02/twist-plasmid.png](images/week-02/twist-plasmid.png)
![]()
