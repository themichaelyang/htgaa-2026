---
title: 'Week 5 HW: Protein Design, Part II'
weight: 10
---

> Superoxide dismutase 1 (SOD1) is a cytosolic antioxidant enzyme that converts superoxide radicals into hydrogen peroxide and oxygen. In its native state, it forms a stable homodimer and binds copper and zinc.
> 
> Mutations in SOD1 cause familial Amyotrophic Lateral Sclerosis (ALS). Among them, the A4V mutation (Alanine → Valine at residue 4) leads to one of the most aggressive forms of the disease. The mutation subtly destabilizes the N-terminus, perturbs folding energetics, and promotes toxic aggregation.

# Part 1: Generate Binders with PepMLM

I retrieved the [UniProt entry (P00441)](https://www.uniprot.org/uniprotkb/P00441/entry):

```
>sp|P00441|SODC_HUMAN Superoxide dismutase [Cu-Zn] OS=Homo sapiens OX=9606 GN=SOD1 PE=1 SV=2
MATKAVCVLKGDGPVQGIINFEQKESNGPVKVWGSIKGLTEGLHGFHVHEFGDNTAGCTS
AGPHFNPLSRKHGGPKDEERHVGDLGNVTADKDGVADVSIEDSVISLSGDHCIIGRTLVV
HEKADDLGKGGNEESTKTGNAGSRLACGVIGIAQ
```

There was a UniProt variation entry for the mutation we are targeting: `VAR_007131`:

> ALS1; severe form; reduces structural stability and enzyme activity; increases tendency to form fibrillar aggregate

With the "A4V mutation (Alanine → Valine at residue 4)":

```
MATKVVCVLKGDGPVQGIINFEQKESNGPVKVWGSIKGLTEGLHGFHVHEFGDNTAGCTS
AGPHFNPLSRKHGGPKDEERHVGDLGNVTADKDGVADVSIEDSVISLSGDHCIIGRTLVV
HEKADDLGKGGNEESTKTGNAGSRLACGVIGIAQ
```

Note that the start codon's amino acid Met is removed [post translationally](https://www.uniprot.org/uniprotkb/P00441/entry#ptm_processing), so in the UniProt sequence it's at residue 5.

Using my [Colab notebook](https://colab.research.google.com/drive/1LRBD-14z-dUAFWTI1Ibhr6ow0tqayZXz?usp=sharing), I generated 3 peptides of length 12 and compared it to `FLYRWLPSRRGG`:

```python
known_binder = 'FLYRWLPSRRGG'
known_binder_ppl = compute_pseudo_perplexity(model, tokenizer, protein_seq, known_binder)

new_binder_row = pd.DataFrame([{'Binder': known_binder, 'Pseudo Perplexity': known_binder_ppl}])
peptide_df = pd.concat([peptide_df, new_binder_row], ignore_index=True)
display(peptide_df)
```

The final result:

| # | Binder       | Pseudo Perplexity |
|---|--------------|-------------------|
| 0 | WHYPAVAVALKE | 9.614430          |
| 1 | WLYPAVALELKE | 14.331262         |
| 2 | KRYGAVAVRHWX | 10.045459         | 
| 3 | WRYPAAGLELKE | 14.706538         |
| 4 | FLYRWLPSRRGG | 20.635231         |

# Part 2: Evaluate Binders with AlphaFold3

<style>
table img {
  max-height: 150px;
  display: inline-block !important;
}

img {
  max-height: 25vh;
}
</style>

Final results from AlphaFold3:

| # | Binder       |  PP  | ipTM | pTM  | Fold |
|---|--------------|------|------|------|------|
| 0 | WHYPAVAVALKE | 9.6  | 0.29 | 0.77 | ![images/week-05/binder-0.png](images/week-05/binder-0.png) |
| 1 | WLYPAVALELKE | 14.3 | 0.27 | 0.76 | ![images/week-05/binder-1.png](images/week-05/binder-1.png) |
| 2 | KRYGAVAVRHWA* | 10.0 | 0.49 | 0.89 | ![images/week-05/binder-2.png](images/week-05/binder-2.png) |
| 3 | WRYPAAGLELKE | 14.7 | 0.24 | 0.81 | ![images/week-05/binder-3.png](images/week-05/binder-3.png) |
| 4 | FLYRWLPSRRGG | 20.6 | 0.32 | 0.82 | ![images/week-05/binder-4.png](images/week-05/binder-4.png) ![images/week-05/binder-4-view-2.png](images/week-05/binder-4-view-2.png) |

*X replaced with A for AlphaFold

## Record the ipTM score and briefly describe where the peptide appears to bind. Does it localize near the N-terminus where A4V sits? Does it engage the β-barrel region or approach the dimer interface? Does it appear surface-bound or partially buried?

Here is the SODC homodimer structure:
![images/week-05/homodimer.png](images/week-05/homodimer.png)

And the structure of the "metal free" A4V SOD1:
![images/week-05/sod1-a4v.png](images/week-05/sod1-a4v.png)

All proteins seem largely surface-bound. Binders 0 and 2 seem to engage the beta-barrel region. None seem too close to the dimer interface. 

## In a short paragraph, describe the ipTM values you observe and whether any PepMLM-generated peptide matches or exceeds the known binder.

One exceeded the known binder: `KRYGAVAVRHWA`, most are around the same level as the known binder, although the binding sites look wildly different from binder to binder.
