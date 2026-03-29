---
title: 'Week 5 HW: Protein Design, Part II'
weight: 10
---

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
</style>

| # | Binder       | ipTM | pTM  | Fold |
|---|--------------|------|------|------|
| 0 | WHYPAVAVALKE | 0.29 | 0.77 | ![images/week-05/binder-0.png](images/week-05/binder-0.png) |
| 1 | WLYPAVALELKE | |
| 2 | KRYGAVAVRHWX | | 
| 3 | WRYPAAGLELKE | |
| 4 | FLYRWLPSRRGG | |
