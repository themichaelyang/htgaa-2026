---
title: 'Week 7 HW: Genetic Circuits II'
weight: 10
---

## Assignment Part 1: Intracellular Artificial Neural Networks (IANNs)

### What advantages do IANNs have over traditional genetic circuits, whose input/output behaviors are Boolean functions?

IANNs are analog, instead of digital (e.g. boolean/binary logic), which means they work on numerical values. This means that their behavior can be finely adjusted: they can output specific quantities, and they can take into account the specific/relative magnitudes of inputs. This is well suited for biological applications because biological systems exhibit homeostatic behaviors.

### Describe a useful application for an IANN; include a detailed description of input/output behavior, as well as any limitations an IANN might face to achieve your goal.

One example could be releasing a variable dose of therapeutic only if relative proportions of the input signals are out of sync. For example, a theoretical IANN circuit for diabetes could monitor both insulin and glucose levels and only emit insulin if levels are low relative to glucose levels.

### Draw a diagram for an intracellular multilayer perceptron where layer 1 outputs an endoribonuclease that regulates a fluorescent protein output in layer 2.

Layer 1 is A, B, C, D and layer 2 is A - B - C + D.

<style>
img {
  max-width: 40vh;
  width: 100% !important;
}
</style>

![images/week-07/iann-sketch.png](images/week-07/iann-sketch.png)

## Assignment Part 2: Fungal Materials

### What are some examples of existing fungal materials and what are they used for? What are their advantages and disadvantages over traditional counterparts?

Some examples include mushroom leather and mycellium packaging. Fungal materials are light, thermally and acoustically insulating and can be grown into moulds. The main disadvantage today is that it is novel so production is currently slow.

### What might you want to genetically engineer fungi to do and why? What are the advantages of doing synthetic biology in fungi as opposed to bacteria?

The reason given in lecture by Ren was to better improve the production and quality of fungal biomaterials. Mycellium from fungi is much less fragile than biocement from bacteria, so it if you are interested in engineered biomaterials.
